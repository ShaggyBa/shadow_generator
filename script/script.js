function getRGB(HEXa) {
	let color = HEXa.split('')
	let red16 = color.splice(1, 2).join('')
	let green16 = color.splice(1, 2).join('')
	let blue16 = color.splice(1, 2).join('')
	let opacity = $('#opacity').val()
	let parseRGB = `rgba(${parseInt(red16, 16)}, ${parseInt(green16, 16)}, ${parseInt(blue16, 16)}, ${opacity} )`
	return parseRGB
}

function cssShadow({
	fontSize,
	offsetX,
	offsetY,
	blur,
	opacity,
	HEXa,
	RGBa }) {
	let shadowStyle = `${offsetX}px ${offsetY}px ${blur}px ${RGBa}`
	$('h1').css('text-shadow', shadowStyle)
	$('#resultHex').val(`background-color: ${HEXa};\nopacity: ${opacity};\nfont-size: ${fontSize}px;`)
	$('#resultRGB').val(`text-shadow: ${offsetX}px ${offsetY}px ${blur}px ${RGBa}; \nfont-size: ${fontSize}px;`)

}
cssShadow({
	fontSize: $('#font-size').val(),
	offsetX: $('#offset_x').val(),
	offsetY: $('#offset_y').val(),
	blur: $('#blur').val(),
	opacity: $('#opacity').val(),
	HEXa: $('#HEX').val(),
	RGBa: getRGB($('#HEX').val())
})

$(document).on('input change', 'input', function () {
	let fontSize = $('#font-size').val()
	let offsetX = $('#offset_x').val()
	let offsetY = $('#offset_y').val()
	let blur = $('#blur').val()
	let opacity = $('#opacity').val()
	let HEXa = $('#HEX').val()
	let RGBa = getRGB(HEXa)

	$('h1').css('font-size', fontSize + 'px')
	cssShadow({
		fontSize: fontSize,
		offsetX: offsetX,
		offsetY: offsetY,
		blur: blur,
		opacity: opacity,
		HEXa: HEXa,
		RGBa: RGBa
	})
})

