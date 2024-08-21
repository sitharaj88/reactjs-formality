import { useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Validates a single form field by applying its validation rules.
 * @param field - The form field to validate.
 * @returns The first validation error encountered, or `null` if validation passes.
 */
function validateField(field) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, rule, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!field.validationRules) {
                        return [2 /*return*/, null];
                    }
                    _i = 0, _a = field.validationRules;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    rule = _a[_i];
                    return [4 /*yield*/, rule(field.value)];
                case 2:
                    result = _b.sent();
                    if (result) {
                        return [2 /*return*/, result];
                    }
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, null];
            }
        });
    });
}

/**
 * Custom hook to manage the state and validation of a form.
 * @param initialValues - The initial values of the form fields.
 * @returns The current form state, a function to set the form state, and a submit handler.
 */
function useForm(initialValues) {
    var _this = this;
    var _a = useState({
        values: initialValues,
        errors: {},
        isValid: true,
    }), formState = _a[0], setFormState = _a[1];
    /**
     * Validates the entire form.
     * @returns A boolean indicating whether the form is valid.
     */
    var validate = function () { return __awaiter(_this, void 0, void 0, function () {
        var errors, _i, _a, key, field, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    errors = {};
                    _i = 0, _a = Object.keys(formState.values);
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    key = _a[_i];
                    field = formState.values[key];
                    return [4 /*yield*/, validateField(field)];
                case 2:
                    error = _b.sent();
                    if (error) {
                        errors[key] = error;
                    }
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    setFormState(function (prev) { return (__assign(__assign({}, prev), { errors: errors, isValid: Object.keys(errors).length === 0 })); });
                    return [2 /*return*/, Object.keys(errors).length === 0];
            }
        });
    }); };
    /**
     * Handles form submission.
     * Validates the form and, if valid, calls the provided submit handler.
     * @param onSubmit - The function to call upon successful validation.
     */
    var handleSubmit = function (onSubmit) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, validate()];
                case 1:
                    if (_a.sent()) {
                        onSubmit();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        formState: formState,
        setFormState: setFormState,
        handleSubmit: handleSubmit,
    };
}

/**
 * Custom hook to manage the state and validation of a single form field.
 * @param name - The name of the form field.
 * @param formState - The current state of the form.
 * @param setFormState - The function to update the form state.
 * @returns The current value, error message, and a change handler for the form field.
 */
function useField(name, formState, setFormState) {
    /**
     * Handles changes to the form field value.
     * Updates the form state with the new value.
     * @param value - The new value of the form field.
     */
    var handleChange = function (value) {
        setFormState(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), { values: __assign(__assign({}, prev.values), (_a = {}, _a[name] = value, _a)) }));
        });
    };
    return {
        value: formState.values[name],
        error: formState.errors[name],
        handleChange: handleChange,
    };
}

export { useField, useForm, validateField };
//# sourceMappingURL=index.esm.js.map
