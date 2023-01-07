using airport_server.AirportData;
using airport_server.Models;

namespace airport_server
{
    public class MockPlainDatacs : IAirportData
    {
        private List<Airplane> airplanes = new List<Airplane>()
        {
                new Airplane()
                {
                    AirplaneId = 1,
                    CompanyName="ELAL"

                },
                 new Airplane()
                {
                    AirplaneId = 2,
                    CompanyName="Arkia"

                }

        };

        public void AddAirplane(Airplane plan)
        {

            airplanes.Add(plan);
        }

        public List<Airplane> GetAirplanes()
        {
            return airplanes;
        }

        //this function return an random airplane - airplane for takeoff
        public Airplane GetRandomAirplane()
        {
            Random random = new Random();
            int index = random.Next(0, airplanes.Count);
            return GetByIndex(index);
        }

        //this function return an airplane by the index in the array 
        public Airplane GetByIndex(int index)
        {
            if (index < 0 || index >= airplanes.Count) { return null; }
            return airplanes[index];
        }
        public Airplane GetById(int id)
        {
            Airplane airplane = airplanes.Find(p => p.AirplaneId == id);
            if (airplane != null)
            {
                return airplane;
            }
            else return null;

        }

        public void RemoveAirplane(Airplane plan)
        {
            airplanes.Remove(plan);
        }
    }
}
