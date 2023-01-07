using airport_server.AirportData;
using airport_server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace airport_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirPortController : ControllerBase
    {
        private IAirportData _airportData;
        public AirPortController(IAirportData airportData)
        {
            _airportData = airportData;
        }

        [HttpGet]
        [Route("/GetAirplanes")] 
        public IActionResult GetAirplanes()
        {
            return Ok(_airportData.GetAirplanes());
        }

        [HttpGet]
        [Route("/GetTakeOffAirplane")]
        public IActionResult GetTakeOffAirplane()
        {
            return Ok(_airportData.GetRandomAirplane());
        }

        [HttpPost]
        [Route("/AddAirplane")]
        public IActionResult AddAirplane(Airplane airplane)
        {
            _airportData.AddAirplane(airplane);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + airplane.AirplaneId, airplane);

        }

        [HttpDelete]
        [Route("/DleteAriplane/{id}")]
        public IActionResult DleteAriplane(int id)
        {
            Airplane plan = _airportData.GetById(id);
            if (plan != null)
            {
                _airportData.RemoveAirplane(plan);
            }
            return Ok(plan);
          
        }


    }
}
