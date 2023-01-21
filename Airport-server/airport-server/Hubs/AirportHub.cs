using airport_server.Models;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace airport_server.Connection
{
   
    [HubName("Airport")]
    public class AirportHub:Hub
    {
     
        public Task ReciveStationStatus(StationData data)
        {
            return Clients.All.SendAsync("ReciveStationStatus",data);
        }
        
    }
}
