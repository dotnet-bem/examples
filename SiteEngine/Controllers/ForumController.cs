using Octokit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace SiteEngine.Controllers
{
    // RateLimitExceededException
    public class ForumController : BaseController
    {
        readonly GitHubClient client =
            new GitHubClient(new ProductHeaderValue("xxx"), new Uri("https://github.com/"));

        // GET: Forum
        public async Task<ActionResult> TopicList()
        {
            var request = new RepositoryIssueRequest { State = ItemStateFilter.All };
            ApiOptions options = new ApiOptions { StartPage = 1, PageSize = 30 };

            var issues = await client.Issue.GetAllForRepository("dotnet-bem", "examples", request, options);
            var list = issues.Select(GetIssueModel).ToArray();

            return SitePage(new { block = "topic-list", list });
        }

        public async Task<ActionResult> Topic(int id)
        {
            var issue = await client.Issue.Get("dotnet-bem", "examples", id);
            var comments = await client.Issue.Comment.GetAllForIssue("dotnet-bem", "examples", id);

            var model = GetIssueModel(issue);
            var list = comments.Select(GetCommentModel).ToArray();

            return SitePage(new
            {
                block = "topic",
                issue = model,
                comments = list
            });
        }

        private object GetCommentModel(IssueComment comment)
        {
            return new {
                body = comment.Body,
                created = comment.CreatedAt,
                author = GetUserModel(comment.User)
            };
        }

        private object GetUserModel(User user)
        {
            return new {
                name = user.Name,
                login = user.Login,
                avatarUrl = user.AvatarUrl,
                profileUrl = user.HtmlUrl
            };
        }

        public object GetIssueModel(Issue issue)
        {
            return new
            {
                id = issue.Id,
                number = issue.Number,
                title = issue.Title,
                body = issue.Body,
                url = Url.Action("Topic", new { id = issue.Number }),
                author = GetUserModel(issue.User),
                created = issue.CreatedAt,
                comments = issue.Comments
            };
        }
    }
}