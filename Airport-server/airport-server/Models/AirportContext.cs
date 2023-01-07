using Microsoft.EntityFrameworkCore;

namespace airport_server.Models
{
    public class AirportContext :DbContext
    {
        public AirportContext(DbContextOptions<AirportContext> options) :base(options)
        {

        }

        public DbSet<Airplane> Airplanes { get; set; }
    }
}
