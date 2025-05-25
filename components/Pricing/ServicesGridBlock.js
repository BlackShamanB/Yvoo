const GridBlock = ({
  tableTitle, // опциональный общий заголовок таблицы
  rows = [], // массив объектов {title: string, items: any[], price: number}
  currencySymbol = "€",
  priceFontSize = "font-[600] text-[36px] leading-[40px]",
  textFontSize = "font-[400] text-[20px] leading-[28px]",
  containerClassName = "p-[0_20px_40px] border-b-[2px] border-[#EEF1F4]",
  titleColor = "text-blue", // цвет для заголовков строк
  headerTitles = [
    "What It Includes",
    "Why It Matters",
    "Best Suited For",
    "Price",
  ],
}) => {
  return (
    <div>
      <div
        className={`grid grid-cols-5 gap-[40px] bg-blue p-[55px_20px] rounded-[10px] mb-[40px]`}
      >
        <div className="text-black font-[700] text-[24px] leading-[30px]">
          Service
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
        <div className={`grid grid-cols-5 gap-[40px] mb-[40px] ${containerClassName}`}>

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
              >
                {item}
              </div>
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
