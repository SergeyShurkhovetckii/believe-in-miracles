(function agreeSubscription() {
	const button = document.querySelector('.email__container .subscribe-btn');
	const checkbox = document.querySelector('.checkbox');

	if (button && checkbox) {
		checkbox.addEventListener('change', toggleBtn);
	}

	function toggleBtn () {
		if (checkbox.checked) {
			button.classList.remove('subscribe-btn--disabled');
		} else {
			button.classList.add('subscribe-btn--disabled');
		}
	}
})();
