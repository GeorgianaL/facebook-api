import React from "react";
import FB from "fb";
import { FacebookProvider, Share, Feed } from "react-facebook";
import "./App.css";

const appId = "279858939324534";
const accessToken =
  "EAADZBh7yqaHYBAFHT5rIxZCyN8Sbs3XRl7BM9VibeyDmKTyIS6QeRDTA1v2ClZC6rPiz0ji4Skn9Y2ZCIrwm1SiLW1w68lmZBps2gH8bWtLLPY1YRYn3Di7cRVzayFxkronoMO4ihzNZAAmoCqZAXVWwhqwdd3ZCyTBnMpTmOdZA15ZCFt9tq2C5E2V6Avirsli3zKbbUMF4p8uKfCMPprfZBsv";
const title = "Test create post on facebook api";
const text = "description will go here";
const img1 = "https://www.bigstockphoto.com/images/homepage/module-6.jpg";
const img2 =
  "https://i.pinimg.com/564x/72/68/95/726895ea002ac968f25280432a5b3b48.jpg";

const postUrl = {
  href: "http://www.google.com",
  title: title,
  quote: text,
  image: img2,
  "og:image:width": 600,
  "og:image:height": 400
};

const testData = () => (
  <div>
    <p>in datda{text}</p>
    <img src={img1} alt="test" />
  </div>
);

class App extends React.Component {
  postOnFb() {
    FB.setAccessToken(accessToken);
    const body = "My first post using facebook-node-sdk";
    FB.api("me/feed", "post", { message: body }, function(res) {
      if (!res || res.error) {
        console.log(!res ? "error occurred" : res.error);
        return;
      }
      console.log("Post Id: " + res.id);
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
          <Feed
            link="https://www.google.com"
            redirectURI="https://www.google.com"
            picture={img2}
            data={img2}
            description="test feed"
            name="this is name"
            caption="this is caption"
          >
            {({ handleClick }) => (
              <button type="button" onClick={handleClick}>
                Share on Feed
              </button>
            )}
          </Feed>
        </FacebookProvider>
        <button onClick={this.postOnFb}>Share with fb</button>
      </div>
    );
  }
}

export default App;
