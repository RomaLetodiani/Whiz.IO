type Props = {
  fillColor?: string
}

const Blob = ({ fillColor = "#FFC0CB" }: Props) => {
  return (
    <span className="blob">
      <svg
        width="469"
        height="318"
        viewBox="0 0 469 318"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M458.008 179.339C424.74 231.414 364.269 294.901 274.29 313.14C185.405 331.158 133.73 284.717 77.4829 256.475C40.9199 238.116 23.7529 212.116 13.8425 182.369C4.09881 153.122 -14.2682 120.878 22.1423 90.362C57.5718 60.6677 123.973 59.8326 178.317 44.519C233.409 28.9943 287.145 -2.9484 337.889 1.38631C392.648 6.0639 412.898 37.8206 432.05 66.1935C455.576 101.047 485.474 136.346 458.008 179.339Z"
          fill={fillColor}
          fillOpacity="0.5"
        />
      </svg>
    </span>
  )
}

export default Blob
