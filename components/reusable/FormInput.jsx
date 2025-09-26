const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="font-general-regular mb-6">
			<label
				className="block text-lg text-white mb-2 font-medium"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-3 border border-gray-600 text-white bg-gray-800 rounded-lg shadow-sm text-md focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
