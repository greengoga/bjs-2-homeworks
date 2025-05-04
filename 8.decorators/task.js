//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(JSON.stringify(args));

    let objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
      return "Из кеша: " + objectInCache.value;
    }
    let result = func(...args);

    cache.push({ hash: hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	let isFirstCall = true;

	function wrapper(...args) {
		wrapper.allCount++;

		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}

		if (isFirstCall) {
			func.apply(this, args);
			wrapper.count++;
			isFirstCall = false;
		}

		timeoutId = setTimeout(() => {
			func.apply(this, args);
			wrapper.count++;
			isFirstCall = true;
			timeoutId = null;
		}, delay);
	}

	wrapper.count = 0;
	wrapper.allCount = 0;

	return wrapper;
}