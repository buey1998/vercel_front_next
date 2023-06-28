import React from "react"

function IconFree({
  width = 24,
  height = 24,
  className
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 270 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M133.499 125C193.422 125 241.999 101.047 241.999 71.5001C241.999 41.9529 193.422 18.0001 133.499 18.0001C73.5761 18.0001 24.999 41.9529 24.999 71.5001C24.999 101.047 73.5761 125 133.499 125Z"
        fill="#CFB6F7"
      />
      <path
        d="M133.499 109C107.374 109 82.1199 103.878 64.2223 94.9458C50.0965 87.8982 41.999 79.3509 41.999 71.5001C41.999 63.6494 50.0965 55.1103 64.2223 48.0544C82.1199 39.122 107.365 34.0001 133.499 34.0001C159.633 34.0001 184.878 39.122 202.776 48.0544C216.902 55.1021 224.999 63.6494 224.999 71.5001C224.999 79.3509 216.893 87.89 202.776 94.9458C184.878 103.878 159.633 109 133.499 109Z"
        stroke="#7B5BE6"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M70.7172 92.2524C68.8462 92.2524 67.2929 91.7317 66.1014 90.6991C64.76 89.543 64.0098 87.8838 64.0098 86.0393C64.0098 83.1974 65.6602 80.9116 68.4314 79.932L68.4932 79.9055V52.4406L68.4314 52.4229C65.6602 51.4433 64.001 49.1575 64.001 46.3157C64.001 44.427 64.76 42.7502 66.1456 41.5941C67.3282 40.6056 68.8638 40.1025 70.7084 40.1025H92.9221C93.5311 40.1025 93.7694 40.0319 93.7694 40.0319C94.3077 39.8643 94.802 39.6966 95.2432 39.5465C96.1876 39.22 97.1672 39.0523 98.1468 39.0523C100.627 39.0523 102.189 40.0408 103.054 40.8704C104.086 41.85 104.819 43.2003 105.313 45.0007L107.925 54.1616C108.49 56.0679 108.111 58.0624 106.866 59.5892C105.851 60.8336 104.422 61.6279 102.745 61.875C102.551 61.9103 102.348 61.928 102.154 61.9456L104.131 69.9416C104.678 72.0773 104.192 73.6659 103.68 74.6014C102.966 75.9164 101.809 76.896 100.336 77.4344L100.177 77.4874C99.4795 77.708 98.7646 77.8227 98.0674 77.8227C97.3702 77.8227 96.6112 77.6992 95.9228 77.452C94.6343 76.9931 93.5223 76.1194 92.6221 74.8662L92.5338 74.7338C92.0749 74.0454 91.766 73.6836 91.5983 73.4982C91.4394 73.4717 91.0864 73.4188 90.451 73.4188H89.3302V79.6937L89.5155 79.729C91.563 80.082 92.7721 81.0882 93.4252 81.8648C94.0694 82.6414 94.8373 83.9829 94.8373 86.0216C94.8373 87.8661 94.0959 89.5253 92.7456 90.6815C91.563 91.7052 90.0097 92.2259 88.1387 92.2259H70.7172V92.2524ZM89.3478 60.9042C89.4008 60.7542 89.4537 60.5689 89.5067 60.3571L89.5508 60.2159C90.0009 58.7596 90.7775 57.6123 91.8719 56.8092C92.5956 56.2797 93.4252 55.909 94.3166 55.7237C93.84 54.9206 93.4605 54.4087 93.1869 54.091C92.5426 53.3408 92.1102 53.1113 91.9513 53.0495C91.4218 52.8466 90.7687 52.7407 90.0009 52.7407H89.339V60.9042H89.3566H89.3478Z"
        fill="#CFB6F7"
      />
      <path
        d="M108.562 92.2524C106.743 92.2524 105.243 91.7494 104.105 90.7521C102.816 89.6313 102.11 88.0427 102.11 86.2599C102.11 84.9538 102.507 83.7182 103.257 82.6944C103.778 81.9796 104.449 81.3971 105.27 80.9558V68.0088C104.387 67.6028 103.663 67.0292 103.107 66.3055C102.34 65.317 101.934 64.0815 101.934 62.7488C101.934 61.1867 102.498 59.7305 103.531 58.6626C104.264 57.9036 105.226 57.3123 106.496 56.8445L112.577 54.5411C113.945 53.9939 114.987 53.6321 115.754 53.4291C116.707 53.1908 117.466 53.0761 118.164 53.0761C119.77 53.0761 121.244 53.685 122.32 54.7617C124.218 53.6056 126.292 53.0143 128.498 53.0143C132.673 53.0143 135.179 54.7794 136.547 56.2621C138.445 58.3184 139.407 61.1337 139.407 64.6375C139.407 67.9647 138.595 70.6123 136.997 72.5186C135.232 74.6191 132.814 75.7311 130.016 75.7311C127.828 75.7311 126.204 75.1575 125.021 74.4514V80.1086L125.595 80.2145C127.033 80.4792 128.225 81.0794 129.134 81.9884C130.228 83.0828 130.828 84.5919 130.828 86.2246C130.828 88.0956 130.052 89.746 128.631 90.8668C127.483 91.7759 126.036 92.2436 124.342 92.2436H108.562V92.2524Z"
        fill="#CFB6F7"
      />
      <path
        d="M153.695 93.0556C149.926 93.0556 146.484 92.2702 143.448 90.7169C140.324 89.1195 137.827 86.8337 136.008 83.9301C134.182 81 133.246 77.5934 133.246 73.7984C133.246 70.0034 134.076 66.2526 135.708 63.1637C137.403 59.96 139.892 57.4271 143.087 55.6355C146.193 53.8969 149.9 53.0143 154.092 53.0143C157.728 53.0143 160.923 53.6763 163.571 54.9824C166.395 56.3769 168.583 58.3626 170.075 60.8955C171.531 63.3578 172.264 66.1732 172.264 69.2444C172.264 71.5126 171.584 73.1541 170.799 74.2926C171.081 74.6456 171.328 75.0428 171.531 75.4664C171.964 76.4107 172.175 77.461 172.175 78.5906V78.6965C172.114 81.4501 171.169 84.0095 169.387 86.3041C167.736 88.4222 165.503 90.1079 162.741 91.317C160.093 92.4731 157.048 93.0645 153.686 93.0645L153.695 93.0556Z"
        fill="#CFB6F7"
      />
      <path
        d="M187.601 93.0555C183.833 93.0555 180.391 92.27 177.355 90.7167C174.23 89.1193 171.733 86.8335 169.915 83.9299C168.088 80.9999 167.152 77.5932 167.152 73.7983C167.152 70.0033 167.982 66.2525 169.615 63.1635C171.309 59.9599 173.798 57.427 176.993 55.6354C180.099 53.8968 183.806 53.0142 187.998 53.0142C191.634 53.0142 194.829 53.6761 197.477 54.9823C200.301 56.3767 202.49 58.3625 203.981 60.8954C205.437 63.3577 206.17 66.173 206.17 69.2443C206.17 71.5125 205.49 73.154 204.705 74.2925C204.987 74.6455 205.234 75.0427 205.437 75.4663C205.87 76.4106 206.082 77.4608 206.082 78.5905V78.6964C206.02 81.45 205.076 84.0094 203.293 86.304C201.642 88.4221 199.41 90.1078 196.647 91.3169C194 92.473 190.955 93.0643 187.592 93.0643L187.601 93.0555Z"
        fill="#CFB6F7"
      />
      <path
        d="M92.9313 44.5241C93.7962 44.5241 94.5287 44.4358 95.1112 44.2417C95.6936 44.0475 96.232 43.8798 96.7086 43.7121C97.1852 43.5445 97.6705 43.465 98.1648 43.465C98.9855 43.465 99.6122 43.668 100.036 44.0652C100.459 44.4711 100.804 45.1595 101.068 46.1568L103.698 55.3794C103.866 55.9355 103.787 56.412 103.469 56.8004C103.151 57.1887 102.692 57.427 102.092 57.5152C101.616 57.5947 101.157 57.5505 100.698 57.3564C100.248 57.171 99.8593 56.7827 99.5504 56.1826C98.5001 53.9938 97.494 52.3435 96.5321 51.2138C95.5701 50.093 94.5728 49.3252 93.5314 48.928C92.49 48.522 91.3074 48.3279 89.9924 48.3279H84.9177V81.7677C84.9177 82.2619 85.0324 82.6767 85.2707 83.0209C85.509 83.3651 85.9062 83.5857 86.4622 83.6828L88.748 84.0888C89.3481 84.1947 89.7717 84.3977 90.0277 84.7066C90.2836 85.0155 90.416 85.4567 90.416 86.0392C90.416 86.6217 90.2307 87.0365 89.86 87.3542C89.4893 87.6719 88.9068 87.8308 88.1302 87.8308H70.7087C69.9232 87.8308 69.3495 87.6719 68.9789 87.3542C68.6082 87.0365 68.4229 86.5952 68.4229 86.0392C68.4229 85.0949 68.9171 84.4418 69.9055 84.0888L71.3617 83.6828C71.8736 83.4975 72.2619 83.2592 72.5179 82.9591C72.7738 82.6591 72.9062 82.2619 72.9062 81.7677V50.5872C72.9062 50.093 72.7738 49.6958 72.5179 49.3958C72.2619 49.0957 71.8736 48.8574 71.3617 48.6721L69.9055 48.2661C68.9171 47.9131 68.4229 47.2688 68.4229 46.3157C68.4229 45.742 68.6082 45.2919 68.9789 44.983C69.3495 44.6741 69.9232 44.5153 70.7087 44.5153H92.9224L92.9313 44.5241ZM80.3991 65.317H89.5864C90.8661 65.317 91.7751 65.061 92.3223 64.558C92.8695 64.0549 93.3461 63.04 93.7609 61.5132C93.9285 60.9748 94.1668 60.5953 94.4757 60.3659C94.7846 60.1364 95.1553 60.0128 95.5877 59.9952C96.6203 59.9775 97.2558 60.4718 97.5029 61.4779L99.8505 71.0094C100.018 71.6537 100 72.1479 99.8063 72.5097C99.6122 72.8716 99.2856 73.1363 98.8355 73.2952C98.3236 73.4629 97.8471 73.4629 97.4146 73.3129C96.9822 73.1628 96.5762 72.8275 96.2055 72.3068C95.6319 71.4419 95.0935 70.7711 94.6081 70.2945C94.1227 69.818 93.5579 69.4914 92.9224 69.3061C92.287 69.1208 91.4574 69.0237 90.4513 69.0237H80.3991V65.3081V65.317Z"
        fill="#7B5BE6"
      />
      <path
        d="M119.912 59.907L120.591 66.6232V82.059C120.591 82.7209 120.697 83.1975 120.918 83.4799C121.138 83.7711 121.597 83.9741 122.294 84.0977L124.766 84.5654C125.322 84.6713 125.736 84.8567 126.001 85.1214C126.266 85.3862 126.407 85.7569 126.407 86.2334C126.407 86.7453 126.231 87.1425 125.878 87.4249C125.525 87.7073 125.013 87.8397 124.333 87.8397H108.553C107.829 87.8397 107.309 87.6985 106.991 87.4249C106.673 87.1513 106.514 86.763 106.514 86.2687C106.514 85.8981 106.612 85.5803 106.806 85.3068C107 85.042 107.318 84.8214 107.75 84.6537L108.712 84.3448C109.039 84.2036 109.286 83.9653 109.436 83.6476C109.595 83.3298 109.665 82.8091 109.665 82.0854V66.0936C109.665 65.4935 109.586 65.0699 109.418 64.8051C109.25 64.5492 108.986 64.3815 108.615 64.2932L107.468 64.1344C107.053 64.0108 106.762 63.8343 106.585 63.6049C106.409 63.3754 106.32 63.093 106.32 62.74C106.32 62.3075 106.444 61.9633 106.691 61.7074C106.938 61.4514 107.371 61.2043 107.988 60.9837L114.113 58.6626C115.349 58.1683 116.249 57.8506 116.823 57.7006C117.387 57.5594 117.829 57.48 118.138 57.48C118.65 57.48 119.047 57.6653 119.311 58.036C119.576 58.4066 119.779 59.0244 119.903 59.8893L119.912 59.907ZM119.417 71.1948C119.417 68.097 119.841 65.5288 120.688 63.4901C121.535 61.4514 122.639 59.9246 124.015 58.9273C125.383 57.9301 126.875 57.427 128.49 57.427C130.573 57.427 132.179 58.036 133.3 59.2539C134.421 60.4718 134.986 62.2634 134.986 64.6374C134.986 67.0115 134.527 68.5913 133.609 69.6768C132.691 70.7712 131.491 71.3183 130.008 71.3183C128.525 71.3183 127.396 70.93 126.637 70.1622C125.878 69.3856 125.489 68.3088 125.489 66.9321V65.6965C125.472 65.1228 125.33 64.6816 125.074 64.3815C124.819 64.0814 124.413 63.9314 123.857 63.9314C123.301 63.9314 122.771 64.1697 122.277 64.6463C121.783 65.1228 121.377 65.8642 121.068 66.8703C120.759 67.8852 120.6 69.209 120.6 70.8594L119.426 71.2036L119.417 71.1948Z"
        fill="#7B5BE6"
      />
      <path
        d="M167.86 69.2443C167.86 70.5416 167.507 71.5389 166.792 72.2273C166.077 72.9157 165.054 73.2599 163.712 73.2599H144.87V70.4446H155.354C156.449 70.4446 156.996 69.9415 156.996 68.9266C156.996 66.2878 156.599 64.3373 155.804 63.0841C155.01 61.8221 153.942 61.1954 152.601 61.1954C151.612 61.1954 150.721 61.522 149.944 62.1662C149.159 62.8193 148.541 63.7813 148.091 65.0698C147.641 66.3584 147.411 67.9293 147.411 69.7915C147.411 73.6659 148.303 76.543 150.085 78.4052C151.868 80.2762 154.269 81.2028 157.278 81.2028C158.867 81.2028 160.288 80.9469 161.532 80.4262C162.777 79.9143 163.853 79.0847 164.762 77.9551C165.257 77.4785 165.636 77.1608 165.91 76.9931C166.174 76.8254 166.448 76.746 166.713 76.746C167.083 76.746 167.348 76.9225 167.516 77.2843C167.684 77.6462 167.763 78.0698 167.763 78.564C167.719 80.3556 167.101 82.0236 165.91 83.5593C164.709 85.0949 163.068 86.3216 160.976 87.2395C158.885 88.1573 156.457 88.6163 153.686 88.6163C150.615 88.6163 147.87 87.9985 145.461 86.7629C143.052 85.5273 141.145 83.7887 139.751 81.5647C138.356 79.3407 137.659 76.7371 137.659 73.7718C137.659 70.5152 138.312 67.6557 139.61 65.2022C140.907 62.7487 142.787 60.8336 145.24 59.4656C147.694 58.0977 150.641 57.4093 154.092 57.4093C157.066 57.4093 159.573 57.9124 161.629 58.9273C163.686 59.9422 165.23 61.3366 166.289 63.1194C167.339 64.9022 167.869 66.9408 167.869 69.2266L167.86 69.2443Z"
        fill="#7B5BE6"
      />
      <path
        d="M201.767 69.2442C201.767 70.5415 201.414 71.5388 200.699 72.2272C199.985 72.9156 198.961 73.2598 197.619 73.2598H178.777V70.4444H189.262C190.356 70.4444 190.903 69.9414 190.903 68.9265C190.903 66.2876 190.506 64.3372 189.712 63.084C188.917 61.8219 187.849 61.1953 186.508 61.1953C185.52 61.1953 184.628 61.5219 183.851 62.1661C183.066 62.8192 182.448 63.7812 181.998 65.0697C181.548 66.3582 181.319 67.9292 181.319 69.7914C181.319 73.6657 182.21 76.5429 183.993 78.405C185.775 80.276 188.176 81.2027 191.185 81.2027C192.774 81.2027 194.195 80.9468 195.439 80.4261C196.684 79.9142 197.76 79.0846 198.67 77.9549C199.164 77.4784 199.543 77.1606 199.817 76.993C200.082 76.8253 200.355 76.7458 200.62 76.7458C200.991 76.7458 201.255 76.9224 201.423 77.2842C201.591 77.646 201.67 78.0697 201.67 78.5639C201.626 80.3555 201.008 82.0235 199.817 83.5591C198.617 85.0948 196.975 86.3215 194.883 87.2394C192.792 88.1572 190.365 88.6161 187.594 88.6161C184.522 88.6161 181.778 87.9984 179.368 86.7628C176.959 85.5272 175.052 83.7886 173.658 81.5646C172.264 79.3405 171.566 76.737 171.566 73.7717C171.566 70.515 172.219 67.6556 173.517 65.2021C174.814 62.7486 176.694 60.8335 179.148 59.4655C181.601 58.0976 184.549 57.4092 187.999 57.4092C190.974 57.4092 193.48 57.9122 195.536 58.9272C197.593 59.9421 199.137 61.3365 200.196 63.1193C201.247 64.902 201.776 66.9407 201.776 69.2265L201.767 69.2442Z"
        fill="#7B5BE6"
      />
      <path
        d="M212.429 78.0848C211.075 78.0848 209.982 76.9915 209.982 75.6371C209.982 54.4157 205.976 50.4097 184.754 50.4097C183.4 50.4097 182.307 49.3164 182.307 47.962C182.307 46.6076 183.4 45.5143 184.754 45.5143C205.976 45.5143 209.982 41.5083 209.982 20.287C209.982 18.9326 211.075 17.8393 212.429 17.8393C213.784 17.8393 214.877 18.9326 214.877 20.287C214.877 41.5083 218.883 45.5143 240.104 45.5143C241.459 45.5143 242.552 46.6076 242.552 47.962C242.552 49.3164 241.459 50.4097 240.104 50.4097C218.883 50.4097 214.877 54.4157 214.877 75.6371C214.877 76.9915 213.784 78.0848 212.429 78.0848Z"
        fill="#7B5BE6"
      />
      <path
        d="M212.429 20.2869C212.429 42.8871 217.504 47.9619 240.104 47.9619C217.504 47.9619 212.429 53.0368 212.429 75.637C212.429 53.0368 207.354 47.9619 184.754 47.9619C207.354 47.9619 212.429 42.8871 212.429 20.2869ZM212.429 15.3915C209.728 15.3915 207.533 17.5863 207.533 20.2869C207.533 30.7466 206.359 36.3844 203.601 39.134C200.843 41.8836 195.213 43.0666 184.754 43.0666C182.053 43.0666 179.858 45.2613 179.858 47.9619C179.858 50.6625 182.053 52.8573 184.754 52.8573C195.213 52.8573 200.851 54.0322 203.601 56.7899C206.35 59.5476 207.533 65.1773 207.533 75.637C207.533 78.3376 209.728 80.5323 212.429 80.5323C215.129 80.5323 217.324 78.3376 217.324 75.637C217.324 65.1773 218.499 59.5395 221.257 56.7899C224.014 54.0403 229.644 52.8573 240.104 52.8573C242.804 52.8573 244.999 50.6625 244.999 47.9619C244.999 45.2613 242.804 43.0666 240.104 43.0666C229.644 43.0666 224.006 41.8917 221.257 39.134C218.507 36.3763 217.324 30.7466 217.324 20.2869C217.324 17.5863 215.129 15.3915 212.429 15.3915Z"
        fill="#CFB6F7"
      />
    </svg>
  )
}

export default IconFree