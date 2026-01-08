import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

function ContactForm({ type }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    // Consulting-specific fields
    sessionLength: "30-minutes",
    // Speaking-specific fields
    organization: "",
    eventType: "",
    eventDate: "",
    audienceSize: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const endpoint = type === "consulting" ? "/api/consulting-inquiry" : type === "speaking" ? "/api/speaking-inquiry" : "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        sessionLength: "30-minutes",
        organization: "",
        eventType: "",
        eventDate: "",
        audienceSize: ""
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: "Name *" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          required: true,
          className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: "Email *" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          required: true,
          className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "phone", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: [
        "Phone ",
        type === "consulting" ? "*" : ""
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "tel",
          id: "phone",
          name: "phone",
          value: formData.phone,
          onChange: handleChange,
          required: type === "consulting",
          className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
        }
      )
    ] }),
    type === "consulting" && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "sessionLength", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: "Preferred Session Length *" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "sessionLength",
          name: "sessionLength",
          value: formData.sessionLength,
          onChange: handleChange,
          required: true,
          className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors",
          children: [
            /* @__PURE__ */ jsx("option", { value: "30-minutes", children: "30 Minutes" }),
            /* @__PURE__ */ jsx("option", { value: "1-hour", children: "1 Hour" }),
            /* @__PURE__ */ jsx("option", { value: "2-hours", children: "2 Hours" }),
            /* @__PURE__ */ jsx("option", { value: "ongoing", children: "Ongoing Support" })
          ]
        }
      )
    ] }),
    type === "speaking" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "organization", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: "Organization *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "organization",
            name: "organization",
            value: formData.organization,
            onChange: handleChange,
            required: true,
            className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "eventType", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: "Event Type" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "eventType",
            name: "eventType",
            value: formData.eventType,
            onChange: handleChange,
            placeholder: "e.g., Keynote, Workshop, Conference",
            className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "eventDate", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: "Event Date" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              id: "eventDate",
              name: "eventDate",
              value: formData.eventDate,
              onChange: handleChange,
              className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "audienceSize", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: "Audience Size" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "audienceSize",
              name: "audienceSize",
              value: formData.audienceSize,
              onChange: handleChange,
              placeholder: "e.g., 50-100",
              className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm uppercase tracking-widest text-stone-600 mb-2", children: type === "consulting" ? "Describe your situation *" : "Message *" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          value: formData.message,
          onChange: handleChange,
          required: true,
          rows: 6,
          className: "w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
        }
      )
    ] }),
    status === "success" && /* @__PURE__ */ jsx("div", { className: "p-4 bg-green-50 border border-green-200 text-green-800", children: "Thank you! Your message has been sent. We'll get back to you soon." }),
    status === "error" && /* @__PURE__ */ jsx("div", { className: "p-4 bg-red-50 border border-red-200 text-red-800", children: errorMessage }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: status === "loading",
        className: "w-full bg-brand text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-brand/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        children: status === "loading" ? "Sending..." : "Send Message"
      }
    )
  ] });
}

export { ContactForm as C };
