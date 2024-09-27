
export default async function displayRazorpay(price) {


  
    const data = await fetch("https://tekbro-api.herokuapp.com/razorpay/"+ price, {
      method: "POST",
    }).then((t) => t.json());
  

    // const navigate = useNavigate();
  
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      description: "Wallet Transaction",
      image: "./img/logo.png",
      order_id: data.id,
      "handler": function (response){
        // navigate('/Payment_success')
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
    };
    console.log(data.amount);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }