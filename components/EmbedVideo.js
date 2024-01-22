const EmbedVideo = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-[#212529] bg-opacity-50 text-black z-[1000] flex-center"
      id="modal"
      onClick={handleOnClose}
    >
      <div className="bg-transparent flex flex-col justify-center relative shadow-[rgba(0, 0, 0, 0.25) 0px 0px 46px 0] w-full md:max-w-[1440px] px-[10px] md:mx-0">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/1cFDJ-GXLpg?si=ahQg30YUwE8aJcQX?&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default EmbedVideo;
