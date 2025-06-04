const GridBlock = ({
  rows = [], // массив объектов {title: string, items: any[], price: number}
  currencySymbol = "€",
  priceFontSize = "font-[600] md:text-[36px] text-[30px] md:leading-[40px] leading-[34px]",
  textFontSize = "font-[400] md:text-[20px] text-[14px] md:leading-[28px] leading-[20px]",
  containerClassName = "md:p-[0_20px_40px] p-[0_0px_18px] md:border-[0] md:border-b-[2px] border-[2px] md:rounded-[0] rounded-[30px] border-[#EEF1F4]",
  headerName = "Service",
  headerTitles = [
    "What It Includes",
    "Why It Matters",
    "Best Suited For",
    "Price",
  ],
  bgColor = "blue",
  gridCols = "5",
  gridTemplateLicense = false,
  plan = false,
}) => {
  return (
    <div>
      <div className="md:block hidden">
        <div
          className={`grid md:grid-cols-${gridCols} grid-cols-1 gap-[40px] bg-${bgColor} p-[55px_20px] rounded-[10px] mb-[40px] ${
            gridTemplateLicense ? "gridTemplateLicense" : ""
          }`}
        >
          <div className={`text-black font-[700] text-[24px] leading-[30px]`}>
            {headerName}
          </div>
          {headerTitles.map((item, index) => (
            <div
              key={`header-${index}`}
              className="font-[700] text-[24px] leading-[30px]"
            >
              {item}
            </div>
          ))}
        </div>
        {rows.map((row, rowIndex) => (
          <div
            className={`grid md:grid-cols-${gridCols} grid-cols-1 gap-[40px] mb-[40px] ${containerClassName}  ${
              gridTemplateLicense ? "gridTemplateLicense" : ""
            }`}
          >
            <>
              <div
                key={`title-${rowIndex}`}
                className={`text-${bgColor} font-[700] text-[20px] leading-[28px]`}
              >
                {row.title}
              </div>

              {row.items.map((item, colIndex) => (
                <div
                  key={`item-${rowIndex}-${colIndex}`}
                  className={`${textFontSize} text-black`}
                  dangerouslySetInnerHTML={{
                    __html: `${item}`,
                  }}
                ></div>
              ))}

              <div className={`${priceFontSize} text-black`}>
                <span className="text-[#949CAF]">{currencySymbol}</span>{" "}
                {row.price}
              </div>
            </>
          </div>
        ))}
      </div>
      <div className="md:hidden block">
        {rows.map((row, rowIndex) => {
          const isLastRow = rowIndex === rows.length - 1;
          return (
            <div
              key={`row-${rowIndex}`}
              className={`grid md:grid-cols-${gridCols} grid-cols-1 gap-[20px] mb-[20px] overflow-hidden ${
                !isLastRow ? containerClassName : "p-[0_0px_18px]  md:border-b-[2px] border-[2px] md:rounded-[0] rounded-[30px] border-[#EEF1F4]"
              } ${gridTemplateLicense ? "gridTemplateLicense" : ""}`}
            >
              <div
                className={`text-white font-[700] text-[18px] leading-[26px] p-[30px_16px] bg-${bgColor}`}
              >
                {row.title} {" "} { plan ? 'Plan' : ''}
              </div>

              {row.items.map((item, colIndex) => (
                <div key={`item-${rowIndex}-${colIndex}`} className="px-[18px]">
                  <div
                    className={`text-${bgColor} font-[700] text-[12px] leading-[16px] mb-[8px]`}
                    dangerouslySetInnerHTML={{
                      __html: `${headerTitles[colIndex]}`,
                    }}
                  ></div>
                  <div
                    key={`item-${rowIndex}-${colIndex}`}
                    className={`${textFontSize} text-black`}
                    dangerouslySetInnerHTML={{ __html: `${item}` }}
                  ></div>
                </div>
              ))}

              <div className={`${priceFontSize} text-black px-[18px]`}>
                <div
                  className={`text-${bgColor} font-[700] text-[12px] leading-[16px] mb-[8px]`}
                  dangerouslySetInnerHTML={{
                    __html: `${headerTitles[headerTitles.length - 1]}`,
                  }}
                ></div>
                <span className="text-[#949CAF]">{currencySymbol}</span>{" "}
                {row.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridBlock;
