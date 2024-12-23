import "../../allstyle/story.css";
import { Storyarr } from "./Storyarr";
import { Storydataarr } from "./Storydataarr";
export const Story = () => {
  return (
    <div className="mainStory">
      <div className="connect-Data-Img">
        <div className="datas">
          <h5>Товхимлууд</h5>
          <Storydataarr />
        </div>
        <div className="firstImg">
          <img
            src="https://dash-api.yld.mn/api/image/9150a4b0-5a23-4aba-9080-34a41b67e398"
            alt=""
          />
        </div>
      </div>
      <div className="secondImg">
        <img
          src="https://cdn.boost.mn/66418cbd1e1c3e2f69d331d2/creative/3c052e0e-0b02-48ed-b6bc-8d520e34348a.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241222%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241222T013023Z&X-Goog-Expires=86399&X-Goog-Signature=2f6893fe6037f2966aa489614872bf8a5832b0774b466a75a175b232d57d238b34077d83d967fb0c53f54aa2d63b70d88de1e0e5857c60dc4ed452e23f34772040adf4ff0fbd28392d8d221b6b8095352699f945a81fce7c5bd12217fe4f6bc6844cad554b95d4582b84cb95557070bd536447b8adea2ee6d970f4ad11bddd0f655c049980924a02d0e14435bf2198c4fc02a6f999c81427e2583e411704ec7896b855677e9b30d9cc8e84e7f72506e7ef76d2bb5075020f6ba085aaffc5442f08a3af9d87217cac3d1bc03392a90611648cdcf6f1f1de07faedf3aaff8fa6a3a0c1a5dfb2c07cea3507e9dda0df34d8a1f87ff5ea038eacfa63e78927ca3d80&X-Goog-SignedHeaders=host"
          alt=""
        />
        <div className="mainStory-Arr">
          <Storyarr />
        </div>
      </div>
    </div>
  );
};
