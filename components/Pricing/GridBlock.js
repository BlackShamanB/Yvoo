const GridBlock = ({
  title,
  items,
  type = "text", // "text", "price" или "image"
  isCurrency = false, // для обратной совместимости
  currencySymbol = "€",
  priceFontSize = "font-[600] text-[36px] leading-[40px]",
  textFontSize = "font-[400] text-[20px] leading-[28px]",
  imageSize = "w-[56px] h-[56px]", // размер по умолчанию для изображений
  imageClassName = "", // дополнительные классы для изображений
  containerClassName = "p-[0_20px_40px] border-b-[2px] border-[#EEF1F4]", // Стили контейнера по умолчанию
}) => {
  const contentType = type === "text" && isCurrency ? "price" : type;

  return (
    <div className={`grid md:grid-cols-4 grid-cols-1 gap-[40px] ${containerClassName}`}>
      <div className="text-blue font-[700] text-[20px] leading-[28px]">
        {title}
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row gap-[20px] ${
            contentType === "price"
              ? priceFontSize
              : contentType === "image"
              ? ""
              : textFontSize
          }`}
        >
          {contentType === "price" ? (
            <div className="text-black">
              <span className="text-[#949CAF]">{currencySymbol}</span> {item}
            </div>
          ) : contentType === "image" ? (
            typeof item === "string" ? (
              <img
                src={item}
                alt=""
                className={`object-contain ${imageSize} ${imageClassName}`}
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt || ""}
                className={`object-contain ${imageSize} ${imageClassName}`}
              />
            )
          ) : (
            <div className="text-black">{item}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridBlock;
