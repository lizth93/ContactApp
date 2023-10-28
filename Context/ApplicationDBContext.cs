using contactApp.Models;
using Microsoft.EntityFrameworkCore;

public class AplicationDBContext : DbContext
{
    public AplicationDBContext(DbContextOptions<AplicationDBContext> options) : base(options) { }

    public DbSet<Contact> Contacts { get; set; }
}