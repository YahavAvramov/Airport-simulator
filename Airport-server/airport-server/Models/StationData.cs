namespace airport_server.Models
{
    public class StationData
    {
        public int StatiuonNumber;
        public string PlaneCompanyName;
        public bool IsLanding;

        public StationData(int statiuonNumber, string planeCompanyName, bool isLanding)
        {
            StatiuonNumber = statiuonNumber;
            PlaneCompanyName = planeCompanyName;
            IsLanding = isLanding;
        }
    }
}
