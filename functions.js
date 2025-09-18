Office.onReady(() => {
  console.log("Validation Add-in loaded");
});

function validateEmail(event) {
  const item = Office.context.mailbox.item;
  let errors = [];

  // Subject validation
  if (!item.subject || item.subject.length < 5) {
    errors.push("Subject must be at least 5 characters long.");
  }

  // Recipients validation
  item.to.getAsync((result) => {
    if (result.status === Office.AsyncResultStatus.Succeeded) {
      const recipients = result.value.map(r => r.emailAddress);
      recipients.forEach(email => {
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          errors.push(`Invalid email address: ${email}`);
        }
      });

      let url = "https://975dc9d4f3e4.ngrok-free.app/validationResult.html?";
      if (errors.length > 0) {
        url += "errors=" + encodeURIComponent(errors.join("<br/>"));
      } else {
        url += "success=1";
      }

      Office.context.ui.displayDialogAsync(url, { height: 40, width: 40 });
      event.completed();
    }
  });
}

// Export function
if (typeof module !== "undefined") {
  module.exports = { validateEmail };
}
