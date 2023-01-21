using airport_server.AirportData;
using airport_server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SignalR;
using airport_server.Connection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNetCore.Cors.Infrastructure;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContextPool<AirportContext>(options => 
options.UseSqlServer("name=ConnectionStrings:MyAirportConnectionString"));

//public IConfiguration Configuration { get; }
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

    options.AddPolicy(name: "FreeForAll",
        builder =>
        {
            builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();

        }
        );

});


   builder.Services.AddSignalR();
builder.Services.AddMvc().SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_2_1);


builder.Services.AddResponseCompression(options =>
{
    options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[] { "application/octet-stream" });
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


app.MapHub<AirportHub>("/AirportHub");
//app.UseAuthorization();
app.UseHttpsRedirection();

//app.MapControllers();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=AirPort}/{action=GetAirplanes}");

app.Run();
