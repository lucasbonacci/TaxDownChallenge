import PropTypes from 'prop-types'
import * as React from 'react'
import Svg, { Mask, Path, G } from 'react-native-svg'

const Logo = props => {
  const { width = 24, height = 150, fillColor = 'none' } = props

  return (
    <Svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 151.002 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="a"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={40}
        y={2}
        width={10}
        height={18}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.404 9.534h-1.706v-3.59h1.835v-3.941h4.345v3.941h2.794v3.59h-2.794v4.205c0 1.542 1.526 1.754 2.381 1.754 0.362 0 0.594 -0.025 0.594 -0.025v3.99s-0.49 0.078 -1.217 0.078c-2.119 0 -6.233 -0.583 -6.233 -5.189V9.534Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.693 19.536h9.16V2.004h-9.16v17.532Z"
          fill="#2F2E46"
        />
      </G>
      <Mask
        id="b"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={51}
        y={5}
        width={13}
        height={15}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.012 16.147c1.169 0 2.203 -1.303 2.203 -2.424v-0.293h-0.414c-1.425 0 -3.06 0.426 -3.06 1.572 0 0.64 0.39 1.145 1.271 1.145Zm1.969 -5.356h0.184v-0.239c0 -1.146 -0.857 -1.518 -1.968 -1.518 -1.687 0 -3.606 1.303 -3.606 1.303l-1.554 -3.249s2.306 -1.786 5.598 -1.786c3.758 0 6.013 2.105 6.013 5.596v8.448h-4.094v-0.827c0 -0.454 0.05 -0.853 0.05 -0.853h-0.05s-0.988 1.998 -3.786 1.998c-2.49 0 -4.536 -1.709 -4.536 -4.422 0 -4 5.676 -4.451 7.747 -4.451Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.234 19.667h12.414V5.305H51.234v14.362Z"
          fill="#2F2E46"
        />
      </G>
      <Mask
        id="c"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={64}
        y={5}
        width={15}
        height={15}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m68.839 12.649 -4.314 -6.955h5.068l1.453 3.078c0.184 0.346 0.415 0.909 0.415 0.909h0.054s0.258 -0.563 0.414 -0.909l1.457 -3.078h5.064l-4.284 6.955 4.206 6.822h-4.937l-1.609 -3.102a8.826 8.826 0 0 1 -0.311 -0.696h-0.054s-0.182 0.455 -0.312 0.696l-1.584 3.102h-4.934l4.206 -6.822Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.523 19.471h13.926V5.694H64.523v13.778Z"
          fill="#2F2E46"
        />
      </G>
      <Mask
        id="d"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={78}
        y={0}
        width={15}
        height={20}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.141 15.966c1.35 0 2.621 -1.017 2.621 -3.402 0 -1.662 -0.858 -3.294 -2.621 -3.294 -1.399 0 -2.62 1.178 -2.62 3.294 0 2.063 1.062 3.402 2.62 3.402ZM84.104 5.358c2.698 0 3.502 1.098 3.502 1.098h0.053s-0.028 -0.27 -0.028 -0.616V0.324h4.488v19.151h-4.201v-0.911c0 -0.427 0.025 -0.775 0.025 -0.775h-0.054s-1.116 2.008 -3.864 2.008c-3.63 0 -6.017 -2.946 -6.017 -7.23 0 -4.367 2.541 -7.206 6.094 -7.206Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.007 19.795h14.111V0.324H78.007v19.471Z"
          fill="#00DC5A"
        />
      </G>
      <Mask
        id="e"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={93}
        y={5}
        width={16}
        height={15}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M101.023 15.828c1.624 0 3.016 -1.25 3.016 -3.305 0 -2.077 -1.392 -3.384 -3.016 -3.384 -1.626 0 -3.014 1.307 -3.014 3.384 0 2.054 1.389 3.305 3.014 3.305Zm-0.025 -10.523c4.2 0 7.553 2.904 7.553 7.218 0 4.291 -3.353 7.144 -7.528 7.144 -4.175 0 -7.524 -2.85 -7.524 -7.144 0 -4.314 3.349 -7.218 7.499 -7.218Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#e)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93.499 19.667h15.052V5.305H93.499v14.362Z"
          fill="#00DC5A"
        />
      </G>
      <Mask
        id="f"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={108}
        y={5}
        width={22}
        height={15}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.672 5.694h4.725l1.663 8.133c0.151 0.75 0.151 1.446 0.151 1.446h0.054s0.053 -0.696 0.234 -1.446l1.842 -8.133h3.844l1.842 8.133a8.19 8.19 0 0 1 0.209 1.446h0.052s0.029 -0.696 0.181 -1.446l1.663 -8.133h4.673l-3.738 13.778h-5.011l-1.506 -6.366c-0.181 -0.75 -0.258 -1.47 -0.258 -1.47h-0.054s-0.078 0.722 -0.258 1.47l-1.506 6.366h-5.063l-3.738 -13.778Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#f)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.672 19.471h21.133V5.694h-21.133v13.778Z"
          fill="#00DC5A"
        />
      </G>
      <Mask
        id="g"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={130}
        y={5}
        width={15}
        height={15}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M130.872 5.69h4.306v1.206c0 0.455 -0.054 0.857 -0.054 0.857h0.054c0.619 -1.069 1.89 -2.382 4.254 -2.382 2.697 0 4.797 1.285 4.797 5.166v8.937h-4.487v-8.082c0 -1.283 -0.493 -1.818 -1.478 -1.818 -1.399 0 -2.256 0.802 -2.646 1.98 -0.181 0.534 -0.259 1.151 -0.259 1.821v6.1h-4.486V5.69Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#g)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M130.871 19.471h13.358V5.37h-13.358v14.102Z"
          fill="#00DC5A"
        />
      </G>
      <Mask
        id="h"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={12}
        y={0}
        width={24}
        height={24}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m16.774 23.645 -3.738 -3.857a1.243 1.243 0 0 1 0 -1.722l16.291 -16.807a1.157 1.157 0 0 1 1.668 0l3.738 3.858c0.461 0.474 0.461 1.245 0 1.72l-16.291 16.807a1.154 1.154 0 0 1 -1.668 0Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#h)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.691 24h22.387V0.906H12.691V24Z"
          fill="#00DC5A"
        />
      </G>
      <Mask
        id="i"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={6}
        y={0}
        width={17}
        height={18}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m10.746 16.661 -3.75 -3.842a1.236 1.236 0 0 1 0 -1.718L17.05 0.81a1.164 1.164 0 0 1 1.675 0l3.75 3.84a1.234 1.234 0 0 1 0 1.716L12.426 16.661a1.171 1.171 0 0 1 -1.679 0Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#i)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.647 17.014h16.182V0.451H6.647v16.562Z"
          fill="#2F2E46"
        />
      </G>
      <Mask
        id="j"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={10}
        height={11}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.062 9.738 0.342 5.899a1.235 1.235 0 0 1 0 -1.709L4.062 0.354a1.146 1.146 0 0 1 1.656 0l3.72 3.838a1.23 1.23 0 0 1 0 1.709l-3.72 3.838c-0.457 0.474 -1.2 0.474 -1.656 0Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#j)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10.093h9.781V0H0v10.093Z"
          fill="#2F2E46"
        />
      </G>
      <Mask
        id="k"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={146}
        y={15}
        width={5}
        height={5}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148.837 15.007c1.193 0 2.165 1.002 2.165 2.232 0 1.233 -0.972 2.232 -2.165 2.232 -1.193 0 -2.164 -1 -2.164 -2.232 0 -1.23 0.971 -2.232 2.164 -2.232Zm0 0.345c-1.012 0 -1.83 0.844 -1.83 1.888 0 1.045 0.821 1.89 1.83 1.89 1.014 0 1.831 -0.845 1.831 -1.89 0 -1.044 -0.82 -1.888 -1.831 -1.888Zm-0.665 0.858h0.847c0.15 0 0.282 0.018 0.384 0.067a0.487 0.487 0 0 1 0.234 0.156 0.439 0.439 0 0 1 0.114 0.204c0.018 0.085 0.03 0.157 0.03 0.226a0.979 0.979 0 0 1 -0.03 0.22 0.414 0.414 0 0 1 -0.114 0.21 0.534 0.534 0 0 1 -0.234 0.15 1.296 1.296 0 0 1 -0.15 0.043l0.482 0.782h-0.33l-0.469 -0.756h-0.431v0.756h-0.331v-2.058Zm0.331 0.271v0.742h0.432c0.066 0 0.132 0 0.181 -0.018 0.053 -0.018 0.118 -0.036 0.167 -0.054a0.421 0.421 0 0 0 0.12 -0.118 0.378 0.378 0 0 0 0.047 -0.193 0.325 0.325 0 0 0 -0.047 -0.187c-0.018 -0.035 -0.071 -0.066 -0.12 -0.102a0.281 0.281 0 0 0 -0.167 -0.054c-0.066 -0.018 -0.131 -0.018 -0.181 -0.018h-0.432Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#k)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M146.671 19.471H151.001v-4.464h-4.33v4.464Z"
          fill="#2F2E46"
        />
      </G>
    </Svg>
  )
}
export default Logo
