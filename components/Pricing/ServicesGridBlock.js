const GridBlock = ({
  rows = [], // массив объектов {title: string, items: any[], price: number}
  currencySymbol = "€",
  priceFontSize = "font-[600] text-[36px] leading-[40px]",
  textFontSize = "font-[400] text-[20px] leading-[28px]",
  containerClassName = "p-[0_20px_40px] border-b-[2px] border-[#EEF1F4]",
  headerName = "Service",
  headerTitles = [
    "What It Includes",
    "Why It Matters",
    "Best Suited For",
    "Price",
  ],
  bgColor = "blue",
  gridCols = "5",
  gridTemplateLicense = false
}) => {
  return (
    <div>
      <div
        className={`grid md:grid-cols-${gridCols} grid-cols-1 gap-[40px] bg-${bgColor} p-[55px_20px] rounded-[10px] mb-[40px] ${gridTemplateLicense ? 'gridTemplateLicense' : ''}`}
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
          className={`grid md:grid-cols-${gridCols} grid-cols-1 gap-[40px] mb-[40px] ${containerClassName}  ${gridTemplateLicense ? 'gridTemplateLicense' : ''}`}
        >
          <>
            {/* Заголовок строки (первый столбец) */}
            <div
              key={`title-${rowIndex}`}
              className={`text-blue font-[700] text-[20px] leading-[28px]`}
            >
              {row.title}
            </div>

            {/* Обычные элементы строки */}
            {row.items.map((item, colIndex) => (
              <div
                key={`item-${rowIndex}-${colIndex}`}
                className={`${textFontSize} text-black`}
                dangerouslySetInnerHTML={{
                  __html: `${item}`,
                }}
              ></div>
            ))}

            {/* Цена (последний столбец) */}
            <div className={`${priceFontSize} text-black`}>
              <span className="text-[#949CAF]">{currencySymbol}</span>{" "}
              {row.price}
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default GridBlock;
