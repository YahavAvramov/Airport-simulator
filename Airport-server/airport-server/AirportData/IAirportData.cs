using airport_server.Models;

namespace airport_server.AirportData
{
    public interface IAirportData
    {
        List<Airplane> GetAirplanes();

        Airplane GetRandomAirplane();
        void AddAirplane(Airplane plan);
        Airplane GetById(int id);

        void RemoveAirplane(Airplane plan);


        
    }
}
