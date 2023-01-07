using airport_server.AirportData;
using airport_server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContextPool<AirportContext>(options => options.UseSqlServer("name=ConnectionStrings:MyAirportConnectionString"));
builder.Services.AddScoped<IAirportData, SqlAirportData>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod()
                                .AllowCredentials();
        });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseCors("AllowOrigin");
app.UseRouting();

app.UseAuthorization();
app.UseHttpsRedirection();

//app.MapControllers();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=AirPort}/{action=GetAirplanes}");

app.Run();
