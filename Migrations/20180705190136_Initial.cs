using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace cursus.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trips",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Destination = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trips", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Trips",
                columns: new[] { "Id", "Date", "Description", "Destination", "Rating" },
                values: new object[] { 1, "01/01/01", "I was very impressed with the city", "Rome", 10 });

            migrationBuilder.InsertData(
                table: "Trips",
                columns: new[] { "Id", "Date", "Description", "Destination", "Rating" },
                values: new object[] { 2, "02/02/02", "I was very impressed with the city uglyness", "Milan", 3 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trips");
        }
    }
}
