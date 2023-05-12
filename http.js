export const post = (feed, val) => {
    return fetch(`https://io.adafruit.com/api/v2/chenfa666/feeds/${feed}/data`, {
        method: "POST",
        headers: {
            "X-AIO-Key": "aio_Gvqr92FWEULXca418ZyO5usBlHby",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            value: val,
        }),
    });
};

export const get = async (feed , limit=0) => {
    let api = `https://io.adafruit.com/api/v2/chenfa666/feeds/${feed}/data`;
    if (limit) {
        api += `?limit=${limit}`
    }
    const response = await fetch(api, {
        headers: {
            "X-AIO-Key": "aio_Gvqr92FWEULXca418ZyO5usBlHby",
        },
    });
    const data = await response.json();
    return data;
};

// curl -H "X-AIO-Key: aio_XaQb46Q7vxr3vP8Cn4mccSPVdSwr" https://io.adafruit.com/api/v2/dlnanh85/feeds/door/data