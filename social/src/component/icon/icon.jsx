function Icon({children, Icons, ...props}) {
    return (
        <>
            <a {...props}>
                <Icons size={25}
                    color="gray" />
            </a>
        </>
    );
}

export default Icon;