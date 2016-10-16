using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Bem;
using System.Web.Mvc;
using System.Web.Security;
using Octokit;
using System.Threading.Tasks;

namespace SiteEngine.Controllers
{
    public class AuthController : Controller
    {
        const string CLIENT_ID = "c6544a0ca8c8eed6562f";
        const string CLIENT_SECRET = "e1d10d44849cde121b6c5d45cc088d677b5fa19e";

        readonly GitHubClient client =
            new GitHubClient(new ProductHeaderValue("xxx"), new Uri("https://github.com/"));

        // GET: Home
        public ActionResult Index()
        {


            return new BemhtmlResult(new
            {
                block = "example",
                githubUrl = GetOauthLoginUrl(),
                token = Session["OAuthToken"]
            });
        }

        public async Task<ActionResult> Auth(string code, string state)
        {
            if (!string.IsNullOrEmpty(code))
            {
                var expectedState = Session["CSRF:State"] as string;
                if (state != expectedState) throw new InvalidOperationException("SECURITY FAIL!");
                Session["CSRF:State"] = null;

                var token = await client.Oauth.CreateAccessToken(
                    new OauthTokenRequest(CLIENT_ID, CLIENT_SECRET, code));
                //{
                //        RedirectUri = new Uri("http://localhost:8041/home/auth")
                //    });
                Session["OAuthToken"] = token.AccessToken;
            }

            return RedirectToAction("Index");
        }

        private string GetOauthLoginUrl()
        {
            string csrf = Membership.GeneratePassword(24, 1);
            Session["CSRF:State"] = csrf;

            // 1. Redirect users to request GitHub access
            var request = new OauthLoginRequest(CLIENT_ID)
            {
                Scopes = { "user", "notifications" },
                State = csrf
            };
            var oauthLoginUrl = client.Oauth.GetGitHubLoginUrl(request);
            return oauthLoginUrl.ToString();
        }
    }
}