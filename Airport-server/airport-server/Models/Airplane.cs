using System.ComponentModel.DataAnnotations;

namespace airport_server.Models
{
    public class Airplane
    {
        private object value;

        public Airplane(object value)
        {
            this.value = value;
        }
        public Airplane(string companyName, string flightNumber, string status, DateTime dateOfEntring ,int id)
        {
            CompanyName = companyName;
            FlightNumber = flightNumber;
            Status = status;
            DateOfEntring = dateOfEntring;
            AirplaneId = id;
        }
        public Airplane()
        {

        }

        [Key]
        public int AirplaneId { get; set; }
        public string  CompanyName { get; set; }
        public string FlightNumber { get; set; }
        public string Status { get; set; }
        public DateTime DateOfEntring { get; set; }

        

    }
}
