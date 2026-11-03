function Button({
	title,
	type = 'button',
	className = 'btn-primary',
	...props
}) {
	return (
		<button type={type} className={className} {...props}>
			{title}
		</button>
	);
}

export default Button;
