using airport_server.Models;

namespace airport_server.Connection
{
    public interface IHubConnection
    {
        Task AirplaneAction(Airplane airplane);
    }
}
