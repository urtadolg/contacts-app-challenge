import { RefObject, useEffect } from "react";

const useOnClickOutside = (
	handler: (event: Event) => void,
	...refs: RefObject<any>[]
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			if (refs.length > 0) {
				const needToHandle = refs.filter(
					(ref) => !ref.current || ref.current.contains(event.target)
				);
				if (needToHandle.length !== 0) {
					return;
				}

				return handler(event);
			}
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [refs, handler]);
};

export default useOnClickOutside;
