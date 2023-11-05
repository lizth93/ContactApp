using Microsoft.AspNetCore.Identity;

namespace contactApp.Repositories
{
    public interface ITokenRepository
    {
       string CreateJWTToken(IdentityUser user, List<string> roles);
    }
}
