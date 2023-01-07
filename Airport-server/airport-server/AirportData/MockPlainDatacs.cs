using airport_server.Models;

namespace airport_server.AirportData
{
    public class MockPlainDatacs : IAirportData
    {
        private List<Airplane> airplanes = new List<Airplane>()
        {
                //new Airplane("ELAL"),
               
                // new Airplane("Arkia")
               

        };

        public List<Airplane> Airplanes { get => airplanes; set => airplanes = value; }

        public void AddAirplane(Airplane plan)
        {
            Airplanes.Add(plan);
        }

        public List<Airplane> GetAirplanes()
        {
            return Airplanes;
        }

        //this function return an random airplane - airplane for takeoff
        public Airplane GetRandomAirplane()
        {
            Random random = new Random();
            int index = random.Next(0, Airplanes.Count);
            return GetByIndex(index);
        }

        //this function return an airplane by the index in the array 
        public Airplane GetByIndex(int index)
        {
            if (index < 0 || index >= Airplanes.Count) { return null; }
            return Airplanes[index];
        }
        public Airplane GetById(int id)
        {
            Airplane airplane = Airplanes.Find(p => p.AirplaneId == id);
            if (airplane != null)
            {
                return airplane;
            }
            else return null;

        }

        public void RemoveAirplane(Airplane plan)
        {
            Airplanes.Remove(plan);
        }
    }
}
