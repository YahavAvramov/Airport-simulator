using airport_server.AirportData;
using airport_server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Timers;

namespace airport_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirPortController : ControllerBase
    {
        private IAirportData _airportData;
        public List<Airplane> TakeOffList = new List<Airplane>();
        public List<Airplane> LandingList = new List<Airplane>();
        private Stations stations;
        public AirPortController(IAirportData airportData)
        {
            //stations = new Stations(TakeOffList, LandingList, airportData);
            _airportData = airportData;
            //System.Timers.Timer timer = new System.Timers.Timer(1000);
            //timer.Elapsed += stations.StationDevider();
            //timer.AutoReset = true;
            //timer.Enabled = true;

        }
        
        //get
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

        //post
        [HttpPost]
        [Route("/AddAirplane")]
        public IActionResult AddAirplane(Airplane airplane)
        {
            _airportData.AddAirplane(airplane);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + airplane.AirplaneId, airplane);

        }

        [HttpPost]
        [Route("/StartTakeOffStation")]
        public IActionResult StartTakeOffStation(Airplane airplane)
        {
            TakeOffList.Add(airplane);
            stations = new Stations(airplane , false);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + airplane.AirplaneId, airplane);
        }

        [HttpPost]
        [Route("/StartLandingStation")]
        public IActionResult StartLandingStation(Airplane plane)
        {
            LandingList.Add(plane);
            stations = new Stations(plane, true);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + plane.AirplaneId, plane);
        }

        //delete
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
