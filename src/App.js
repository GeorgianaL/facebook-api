import React from "react";
import FB from "fb";
import { FacebookProvider, Share, Feed, Initialize } from "react-facebook";
import "./App.css";

const appId = "279858939324534";
const title = "Title: Test create post on facebook api";
const text = `
  Test Prerequisites
  Open Graph Markup
  Before you enable sharing, you should mark up your page's HTML with Open Graph tags.

  This helps make sure that when people share from your site, your content appears the way you want on Facebook, with a title, description, and image thumbnail.

If you have a mobile subdomain, you can optimize your content by Optimizing for a Mobile Subdomain.`;
const img =
  "https://i.pinimg.com/564x/72/68/95/726895ea002ac968f25280432a5b3b48.jpg";

const postUrl = {
  // href: `http://www.google.com?og:image=${img2}&og:image:height=400&og:image:width=600`,
  href: "https://job-board.azzurehr.co.ro/",
  quote: `${title}
    ${text}
  `,
  redirectURI: "https://job-board.azzurehr.co.ro/",
  data: "this is data"
};

class App extends React.Component {
  share() {
    const accessToken = FB.getAccessToken();
    console.log(FB);
    FB.api("4", function(res) {
      if (!res || res.error) {
        console.log(!res ? "error occurred" : res.error);
        return;
      }
      console.log(res.id);
      console.log(res.name);
    });
  }
  render() {
    return (
      <div className="App">
        <FacebookProvider appId={appId}>
          {/* <Share {...postUrl}>
            {({ handleClick, loading }) => (
              <button type="button" disabled={loading} onClick={handleClick}>
                Share
              </button>
            )}
          </Share> */}
        </FacebookProvider>
        <button onClick={this.share}>Share</button>
      </div>
    );
  }
}

export default App;
