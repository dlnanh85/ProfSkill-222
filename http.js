export const post = (feed, val) => {
    return fetch(`https://io.adafruit.com/api/v2/dlnanh85/feeds/${feed}/data`, {
        method: "POST",
        headers: {
            "X-AIO-Key": "aio_XaQb46Q7vxr3vP8Cn4mccSPVdSwr",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            value: val,
        }),
    });
};

export const get = async (feed , limit=0) => {
    const response = await fetch(`https://io.adafruit.com/api/v2/dlnanh85/feeds/${feed}/data`, {
        headers: {
            "X-AIO-Key": "aio_XaQb46Q7vxr3vP8Cn4mccSPVdSwr",
        },
    });
    const data = await response.json();
    return data;
};

// curl -H "X-AIO-Key: aio_XaQb46Q7vxr3vP8Cn4mccSPVdSwr" https://io.adafruit.com/api/v2/dlnanh85/feeds/door/data