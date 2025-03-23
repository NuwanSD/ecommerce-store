using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole { Id = "84253d2d-d0b0-4005-8e81-944a4814aa57", Name = "Member", NormalizedName = "MEMBER" },
                new IdentityRole { Id = "db1cba9a-9d07-46f7-a1a0-61c03616a6b4", Name = "Admin", NormalizedName = "ADMIN" }
            );
    }
}
