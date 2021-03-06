import { Probot } from "probot";

export = (app: Probot) => {
  app.on(["issues.opened"], async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  app.on("pull_request_review_comment.created", async () => {});
  app.on("pull_request", async (context) => {
    const issueComment = context.issue({
      body: "pull req",
    });
    await context.octokit.pulls.checkIfMerged();
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
