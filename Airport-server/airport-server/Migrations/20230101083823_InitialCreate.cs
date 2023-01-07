using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace airportserver.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfEntring",
                table: "Airplanes",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FlightNumber",
                table: "Airplanes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Airplanes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateOfEntring",
                table: "Airplanes");

            migrationBuilder.DropColumn(
                name: "FlightNumber",
                table: "Airplanes");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Airplanes");
        }
    }
}
