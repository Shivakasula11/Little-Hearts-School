

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

/**
 * POST JSON to the backend.
 * @param {string} path  e.g. '/api/enquiry/admission'
 * @param {object} body  payload to send
 * @returns {Promise<object>} parsed JSON response
 * @throws {Error} with a user-friendly message on failure
 */
export async function postJSON(path, body) {
  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (networkErr) {
    // fetch itself failed (server down, no internet, CORS block)
    throw new Error('Network error. Please check your connection and try again.');
  }

  if (!res.ok) {
    // Server responded with 4xx or 5xx — try to extract a readable message
    let detail = `Request failed (status ${res.status})`;
    try {
      const data = await res.json();
      // FastAPI uses { detail: "..." } or { detail: [...] }
      if (typeof data.detail === 'string') {
        detail = data.detail;
      } else if (Array.isArray(data.detail) && data.detail[0]?.msg) {
        // Pydantic validation errors
        detail = data.detail[0].msg;
      }
    } catch {
      // body wasn't JSON; keep generic message
    }
    throw new Error(detail);
  }

  return res.json();
}

/**
 * GET JSON from the backend. (Not used yet, but ready for when you migrate content from data.js.)
 * @param {string} path  
 * @returns {Promise<any>} 
 */
export async function getJSON(path) {
  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`);
  } catch {
    throw new Error('Network error. Please check your connection and try again.');
  }
  if (!res.ok) {
    throw new Error(`Request failed (status ${res.status})`);
  }
  return res.json();
}