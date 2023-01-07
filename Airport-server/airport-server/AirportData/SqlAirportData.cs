using airport_server.Models;

namespace airport_server.AirportData
{
    //this class works with the sql Db using the class - AirportContext that inhret from DbContext
    public class SqlAirportData : IAirportData
    {
         
        private AirportContext _context;
        public SqlAirportData(AirportContext context)
        {
            _context = context;
        }
        public void AddAirplane(Airplane plan)
        {
            //plan.AirplaneId = _context.Airplanes.Count();
            _context.Airplanes.Add(plan);
            _context.SaveChanges();
        }

        //return all the airplanes from the db
        public List<Airplane> GetAirplanes()
        {
            return _context.Airplanes.ToList();
        }

        public Airplane GetById(int id)
        {
            return _context.Airplanes.SingleOrDefault(p => p.AirplaneId == id);
        }


        public Airplane GetRandomAirplane()
        {
            return _context.Airplanes.First();
        }

        //delete airplane from the db
        public void RemoveAirplane(Airplane plan)
        {
            _context.Airplanes.Remove(plan);
                _context.SaveChanges();
        }
    }
}
