using contactApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace contactApp.Context
{
    public class AuthContactDBContext : IdentityDbContext
    {
        public AuthContactDBContext(DbContextOptions<AuthContactDBContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var readerRoleId = "0d34c31d-0db2-4efe-882a-a1d97e169cf9";
            var writerRoleId = "b68f0dc9-c479-42d9-b2ef-60015bab37ed";

            var roles = new List<IdentityRole> { 
                
               new IdentityRole
               {
                   Id = readerRoleId,
                   ConcurrencyStamp= readerRoleId,
                   Name ="Reader",
                   NormalizedName="Reader".ToUpper()
               },
                 new IdentityRole
               {
                   Id = writerRoleId,
                   ConcurrencyStamp= writerRoleId,
                   Name ="Writer",
                   NormalizedName="Writer".ToUpper()
               }
            };

            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
