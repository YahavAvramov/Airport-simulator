

using Microsoft.AspNetCore.SignalR;

namespace airport_server.Connection
{
    public class NotifyService
    {
            private readonly IHubContext<AirportHub> _hub;

            public NotifyService(IHubContext<AirportHub> hub)
            {
                _hub = hub;
            }

            public Task SendNotificationAsync(string message)
            {
                return _hub.Clients.All.SendAsync("ReceiveMessage", message);
            }
        
    }
}
