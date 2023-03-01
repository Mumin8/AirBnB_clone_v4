$(document).ready(function() {
	const amenitiesChecked = [];
	$('input[type=checkbox]').change(function() {
		const amenityId = $(this).data('id');
		if ($(this).is(':checked')) {
			amenitiesChecked.push(amenityId);
		}else {
			const index = amenitiesChecked.indexOf(amenityId);
			 if (index !== -1) {
				 amenitiesChecked.splice(index, 1);
			 }
		}
		const amenitiesText = amenitiesChecked.map(id => ` ${id}`).join(',');
		$('div.amenities h4').text(`Amenities: ${amenitiesText}`);
	});
});
