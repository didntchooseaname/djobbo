type IconProps = {
    width?: number
    height?: number
    className?: string
}

export const SpotifyIcon = ({ width, height, className }: IconProps) => (
    <svg
        width={width ?? 12}
        height={height ?? 12}
        viewBox="0 0 12 12"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.9975 0C2.6905 0 0 2.691 0 5.998C0 9.308 2.6905 12 5.9975 12C9.3075 12 12 9.3075 12 5.998C12 2.691 9.3075 0 5.9975 0ZM2.954 8.202C3.64071 7.99164 4.35479 7.88414 5.073 7.883C6.28 7.883 7.4715 8.189 8.519 8.768C8.5815 8.802 8.638 8.914 8.664 9.054C8.689 9.194 8.679 9.3375 8.638 9.412C8.61868 9.44744 8.59252 9.47869 8.56103 9.50394C8.52954 9.52919 8.49335 9.54794 8.45456 9.5591C8.41578 9.57026 8.37516 9.57361 8.33507 9.56896C8.29497 9.56431 8.2562 9.55175 8.221 9.532C7.4516 9.10992 6.60527 8.84667 5.7322 8.75786C4.85914 8.66905 3.97713 8.75649 3.1385 9.015C3.1 9.02745 3.05941 9.03211 3.01909 9.02872C2.97877 9.02533 2.93953 9.01395 2.90365 8.99524C2.86777 8.97653 2.83598 8.95087 2.81011 8.91976C2.78425 8.88864 2.76483 8.85269 2.753 8.814C2.6995 8.639 2.81 8.249 2.954 8.202ZM2.6925 5.992C3.46827 5.78124 4.26861 5.67448 5.0725 5.6745C6.5195 5.6745 7.956 6.0245 9.2275 6.6875C9.317 6.7325 9.3825 6.8095 9.4125 6.9035C9.42767 6.95097 9.43318 7.001 9.42871 7.05063C9.42425 7.10026 9.40989 7.1485 9.3865 7.1925C9.273 7.4145 9.14 7.564 9.0565 7.564C8.99558 7.56373 8.9356 7.54899 8.8815 7.521C7.7061 6.90734 6.39894 6.58918 5.073 6.594C4.33547 6.59252 3.60113 6.69091 2.89 6.8865C2.84256 6.89947 2.79303 6.90297 2.74424 6.89679C2.69545 6.89062 2.64835 6.8749 2.60563 6.85052C2.56292 6.82615 2.52542 6.79359 2.49529 6.75473C2.46515 6.71586 2.44297 6.67144 2.43 6.624C2.374 6.413 2.5025 6.044 2.6925 5.992ZM2.625 4.549C2.56872 4.56344 2.51014 4.5666 2.45264 4.55828C2.39513 4.54996 2.33985 4.53034 2.28997 4.50054C2.24009 4.47075 2.1966 4.43136 2.16202 4.38467C2.12744 4.33798 2.10246 4.2849 2.0885 4.2285C2.027 3.9795 2.1825 3.6905 2.4085 3.6335C3.28025 3.41878 4.17469 3.30983 5.0725 3.309C6.7975 3.309 8.4505 3.697 9.9845 4.4625C10.0899 4.51491 10.1702 4.60702 10.2077 4.7186C10.2452 4.83017 10.2368 4.95207 10.1845 5.0575C10.113 5.2015 9.958 5.3565 9.787 5.3565C9.71994 5.35625 9.65374 5.34141 9.593 5.313C8.19029 4.60932 6.64181 4.24519 5.0725 4.25C4.255 4.25 3.4315 4.3505 2.625 4.549Z"
            fill="currentColor"
        />
    </svg>
)

export const MemoryIcon = ({ width, height, className }: IconProps) => (
    <svg
        width={width ?? 12}
        height={height ?? 12}
        viewBox="0 0 12 12"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10.5 2.50781H1.5C1.07812 2.50781 0.722656 2.64844 0.433594 2.92969C0.144531 3.21094 0 3.57031 0 4.00781V8.50781C0 8.77344 0.0976563 9.00391 0.292969 9.19922C0.488281 9.39453 0.726562 9.49219 1.00781 9.49219H10.9922C11.2734 9.49219 11.5117 9.39453 11.707 9.19922C11.9023 9.00391 12 8.77344 12 8.50781V4.00781C12 3.57031 11.8555 3.21094 11.5664 2.92969C11.2773 2.64844 10.9219 2.50781 10.5 2.50781ZM10.0078 8.50781V7.00781H9.49219V8.50781H9V7.00781H8.50781V8.50781H7.99219V7.00781H7.5V8.50781H6.49219V7.00781C6.49219 6.66406 6.32812 6.49219 6 6.49219C5.67188 6.49219 5.50781 6.66406 5.50781 7.00781V8.50781H4.99219V7.00781H4.5V8.50781H4.00781V7.00781H3.49219V8.50781H3V7.00781H2.50781V8.50781H1.99219V7.00781H1.5V8.50781H1.00781V4.00781C1.00781 3.66406 1.17188 3.49219 1.5 3.49219H10.5C10.8281 3.49219 10.9922 3.66406 10.9922 4.00781V8.50781H10.0078ZM2.50781 4.00781H1.99219C1.66406 4.00781 1.5 4.17188 1.5 4.5V6C1.5 6.32812 1.66406 6.49219 1.99219 6.49219H2.50781C2.83594 6.49219 3 6.32812 3 6V4.5C3 4.17188 2.83594 4.00781 2.50781 4.00781ZM4.5 4.00781H4.00781C3.66406 4.00781 3.49219 4.17188 3.49219 4.5V6C3.49219 6.32812 3.66406 6.49219 4.00781 6.49219H4.5C4.82812 6.49219 4.99219 6.32812 4.99219 6V4.5C4.99219 4.17188 4.82812 4.00781 4.5 4.00781ZM7.99219 4.00781H7.5C7.17188 4.00781 7.00781 4.17188 7.00781 4.5V6C7.00781 6.32812 7.17188 6.49219 7.5 6.49219H7.99219C8.33594 6.49219 8.50781 6.32812 8.50781 6V4.5C8.50781 4.17188 8.33594 4.00781 7.99219 4.00781ZM10.0078 4.00781H9.49219C9.16406 4.00781 9 4.17188 9 4.5V6C9 6.32812 9.16406 6.49219 9.49219 6.49219H10.0078C10.3359 6.49219 10.5 6.32812 10.5 6V4.5C10.5 4.17188 10.3359 4.00781 10.0078 4.00781Z"
            fill="currentColor"
        />
    </svg>
)

export const CpuIcon = ({ width, height, className }: IconProps) => (
    <svg
        width={width ?? 12}
        height={height ?? 12}
        viewBox="0 0 12 12"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.5078 4.00781C11.6641 4.00781 11.7422 3.92188 11.7422 3.75C11.7422 3.57812 11.6641 3.49219 11.5078 3.49219H10.5V3C10.5 2.57812 10.3555 2.22266 10.0664 1.93359C9.77734 1.64453 9.42188 1.5 9 1.5H8.50781V0.492188C8.50781 0.335938 8.42188 0.257812 8.25 0.257812C8.07812 0.257812 7.99219 0.335938 7.99219 0.492188V1.5H7.00781V0.492188C7.00781 0.335938 6.92188 0.257812 6.75 0.257812C6.57812 0.257812 6.49219 0.335938 6.49219 0.492188V1.5H5.50781V0.492188C5.50781 0.335938 5.42188 0.257812 5.25 0.257812C5.07812 0.257812 4.99219 0.335938 4.99219 0.492188V1.5H4.00781V0.492188C4.00781 0.335938 3.92188 0.257812 3.75 0.257812C3.57812 0.257812 3.49219 0.335938 3.49219 0.492188V1.5H3C2.57812 1.5 2.22266 1.64453 1.93359 1.93359C1.64453 2.22266 1.5 2.57812 1.5 3V3.49219H0.492188C0.335938 3.49219 0.257812 3.57812 0.257812 3.75C0.257812 3.92188 0.335938 4.00781 0.492188 4.00781H1.5V4.99219H0.492188C0.335938 4.99219 0.257812 5.07812 0.257812 5.25C0.257812 5.42188 0.335938 5.50781 0.492188 5.50781H1.5V6.49219H0.492188C0.335938 6.49219 0.257812 6.57812 0.257812 6.75C0.257812 6.92188 0.335938 7.00781 0.492188 7.00781H1.5V7.99219H0.492188C0.335938 7.99219 0.257812 8.07812 0.257812 8.25C0.257812 8.42188 0.335938 8.50781 0.492188 8.50781H1.5V9C1.5 9.42188 1.64453 9.77734 1.93359 10.0664C2.22266 10.3555 2.57812 10.5 3 10.5H3.49219V11.5078C3.49219 11.6641 3.57812 11.7422 3.75 11.7422C3.92188 11.7422 4.00781 11.6641 4.00781 11.5078V10.5H4.99219V11.5078C4.99219 11.6641 5.07812 11.7422 5.25 11.7422C5.42188 11.7422 5.50781 11.6641 5.50781 11.5078V10.5H6.49219V11.5078C6.49219 11.6641 6.57812 11.7422 6.75 11.7422C6.92188 11.7422 7.00781 11.6641 7.00781 11.5078V10.5H7.99219V11.5078C7.99219 11.6641 8.07812 11.7422 8.25 11.7422C8.42188 11.7422 8.50781 11.6641 8.50781 11.5078V10.5H9C9.42188 10.5 9.77734 10.3555 10.0664 10.0664C10.3555 9.77734 10.5 9.42188 10.5 9V8.50781H11.5078C11.6641 8.50781 11.7422 8.42188 11.7422 8.25C11.7422 8.07812 11.6641 7.99219 11.5078 7.99219H10.5V7.00781H11.5078C11.6641 7.00781 11.7422 6.92188 11.7422 6.75C11.7422 6.57812 11.6641 6.49219 11.5078 6.49219H10.5V5.50781H11.5078C11.6641 5.50781 11.7422 5.42188 11.7422 5.25C11.7422 5.07812 11.6641 4.99219 11.5078 4.99219H10.5V4.00781H11.5078ZM9.49219 9C9.49219 9.32812 9.32812 9.49219 9 9.49219H3C2.67188 9.49219 2.50781 9.32812 2.50781 9V3C2.50781 2.67188 2.67188 2.50781 3 2.50781H9C9.32812 2.50781 9.49219 2.67188 9.49219 3V9ZM7.99219 3.49219H4.00781C3.66406 3.49219 3.49219 3.66406 3.49219 4.00781V7.99219C3.49219 8.33594 3.66406 8.50781 4.00781 8.50781H7.99219C8.33594 8.50781 8.50781 8.33594 8.50781 7.99219V4.00781C8.50781 3.66406 8.33594 3.49219 7.99219 3.49219ZM7.5 7.5H4.5V4.5H7.5V7.5Z"
            fill="currentColor"
        />
    </svg>
)

export const PreviousIcon = ({ width, height, className }: IconProps) => (
    <svg
        width={width ?? 16}
        height={height ?? 16}
        viewBox="0 0 16 16"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4.33366 12C4.14477 12 3.98633 11.936 3.85833 11.808C3.73077 11.6804 3.66699 11.5222 3.66699 11.3333V4.66667C3.66699 4.47778 3.73077 4.31933 3.85833 4.19133C3.98633 4.06378 4.14477 4 4.33366 4C4.52255 4 4.68099 4.06378 4.80899 4.19133C4.93655 4.31933 5.00033 4.47778 5.00033 4.66667V11.3333C5.00033 11.5222 4.93655 11.6804 4.80899 11.808C4.68099 11.936 4.52255 12 4.33366 12ZM11.3003 11.3167L7.16699 8.55C6.96699 8.41667 6.86699 8.23333 6.86699 8C6.86699 7.76667 6.96699 7.58333 7.16699 7.45L11.3003 4.68333C11.5225 4.53889 11.7503 4.53044 11.9837 4.658C12.217 4.786 12.3337 4.98333 12.3337 5.25V10.75C12.3337 11.0167 12.217 11.2167 11.9837 11.35C11.7503 11.4833 11.5225 11.4722 11.3003 11.3167V11.3167Z"
            fill="currentColor"
        />
    </svg>
)

export const NextIcon = ({ width, height, className }: IconProps) => (
    <svg
        width={width ?? 16}
        height={height ?? 16}
        viewBox="0 0 16 16"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.667 12C11.4781 12 11.3199 11.936 11.1923 11.808C11.0643 11.6804 11.0003 11.5222 11.0003 11.3333V4.66667C11.0003 4.47778 11.0643 4.31933 11.1923 4.19133C11.3199 4.06378 11.4781 4 11.667 4C11.8559 4 12.0141 4.06378 12.1417 4.19133C12.2697 4.31933 12.3337 4.47778 12.3337 4.66667V11.3333C12.3337 11.5222 12.2697 11.6804 12.1417 11.808C12.0141 11.936 11.8559 12 11.667 12ZM4.70033 11.3167C4.4781 11.4722 4.25033 11.4833 4.01699 11.35C3.78366 11.2167 3.66699 11.0167 3.66699 10.75V5.25C3.66699 4.98333 3.78366 4.786 4.01699 4.658C4.25033 4.53044 4.4781 4.53889 4.70033 4.68333L8.83366 7.45C9.03366 7.58333 9.13366 7.76667 9.13366 8C9.13366 8.23333 9.03366 8.41667 8.83366 8.55L4.70033 11.3167Z"
            fill="currentColor"
        />
    </svg>
)
export const PlayIcon = ({ width, height, className }: IconProps) => (
    <svg
        width={width ?? 16}
        height={height ?? 16}
        viewBox="0 0 16 16"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.34967 12.0167C6.12745 12.1611 5.90234 12.1693 5.67434 12.0413C5.44679 11.9138 5.33301 11.7167 5.33301 11.45V4.55001C5.33301 4.28335 5.44679 4.08601 5.67434 3.95801C5.90234 3.83046 6.12745 3.8389 6.34967 3.98335L11.783 7.43335C11.983 7.56668 12.083 7.75557 12.083 8.00001C12.083 8.24446 11.983 8.43335 11.783 8.56668L6.34967 12.0167Z"
            fill="currentColor"
        />
    </svg>
)
