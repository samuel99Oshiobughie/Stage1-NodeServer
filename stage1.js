const express = require('express');

const stage1 = express();


stage1.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long'});
    const utcTime = new Date().toISOString();
    const githubFileUrl = 'https://github.com/samuel99Oshiobughie/Stage1-NodeServer/blob/master/stage1.js';
    const githubRepoUrl = 'https://github.com/samuel99Oshiobughie/Stage1-NodeServer';

    const response = {
        slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
      };

      res.json(response);
})


const PORT = process.env.PORT || 3000;

stage1.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
