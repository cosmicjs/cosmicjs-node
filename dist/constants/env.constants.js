"use strict";

var apiConfigs = {
  production: {
    v1: {
      apiUrl: 'https://api.cosmicjs.com/v1',
      uploadUrl: 'https://upload.cosmicjs.com/v2'
    },
    v2: {
      apiUrl: 'https://api.cosmicjs.com/v2',
      uploadUrl: 'https://upload.cosmicjs.com/v2'
    },
    v3: {
      apiUrl: 'https://api.cosmicjs.com/v3',
      uploadUrl: 'https://workers.cosmicjs.com/v3'
    }
  },
  staging: {
    v1: {
      apiUrl: 'https://api.cosmic-staging.com/v1',
      uploadUrl: 'https://upload.cosmicjs.com/v2'
    },
    v2: {
      apiUrl: 'https://api.cosmic-staging.com/v2',
      uploadUrl: 'https://upload.cosmicjs.com/v2'
    },
    v3: {
      apiUrl: 'https://api.cosmic-staging.com/v3',
      uploadUrl: 'https://workers.cosmic-staging.com/v3'
    }
  }
};
module.exports = {
  apiConfigs: apiConfigs
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcGlDb25maWdzIiwicHJvZHVjdGlvbiIsInYxIiwiYXBpVXJsIiwidXBsb2FkVXJsIiwidjIiLCJ2MyIsInN0YWdpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9lbnYuY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaUNvbmZpZ3MgPSB7XG4gIHByb2R1Y3Rpb246IHtcbiAgICB2MToge1xuICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9hcGkuY29zbWljanMuY29tL3YxJyxcbiAgICAgIHVwbG9hZFVybDogJ2h0dHBzOi8vdXBsb2FkLmNvc21pY2pzLmNvbS92MicsXG4gICAgfSxcbiAgICB2Mjoge1xuICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9hcGkuY29zbWljanMuY29tL3YyJyxcbiAgICAgIHVwbG9hZFVybDogJ2h0dHBzOi8vdXBsb2FkLmNvc21pY2pzLmNvbS92MicsXG4gICAgfSxcbiAgICB2Mzoge1xuICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9hcGkuY29zbWljanMuY29tL3YzJyxcbiAgICAgIHVwbG9hZFVybDogJ2h0dHBzOi8vd29ya2Vycy5jb3NtaWNqcy5jb20vdjMnLFxuICAgIH0sXG4gIH0sXG4gIHN0YWdpbmc6IHtcbiAgICB2MToge1xuICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9hcGkuY29zbWljLXN0YWdpbmcuY29tL3YxJyxcbiAgICAgIHVwbG9hZFVybDogJ2h0dHBzOi8vdXBsb2FkLmNvc21pY2pzLmNvbS92MicsXG4gICAgfSxcbiAgICB2Mjoge1xuICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9hcGkuY29zbWljLXN0YWdpbmcuY29tL3YyJyxcbiAgICAgIHVwbG9hZFVybDogJ2h0dHBzOi8vdXBsb2FkLmNvc21pY2pzLmNvbS92MicsXG4gICAgfSxcbiAgICB2Mzoge1xuICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9hcGkuY29zbWljLXN0YWdpbmcuY29tL3YzJyxcbiAgICAgIHVwbG9hZFVybDogJ2h0dHBzOi8vd29ya2Vycy5jb3NtaWMtc3RhZ2luZy5jb20vdjMnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpQ29uZmlncyxcbn07XG4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVSxHQUFHO0VBQ2pCQyxVQUFVLEVBQUU7SUFDVkMsRUFBRSxFQUFFO01BQ0ZDLE1BQU0sRUFBRSw2QkFBNkI7TUFDckNDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDREMsRUFBRSxFQUFFO01BQ0ZGLE1BQU0sRUFBRSw2QkFBNkI7TUFDckNDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDREUsRUFBRSxFQUFFO01BQ0ZILE1BQU0sRUFBRSw2QkFBNkI7TUFDckNDLFNBQVMsRUFBRTtJQUNiO0VBQ0YsQ0FBQztFQUNERyxPQUFPLEVBQUU7SUFDUEwsRUFBRSxFQUFFO01BQ0ZDLE1BQU0sRUFBRSxtQ0FBbUM7TUFDM0NDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDREMsRUFBRSxFQUFFO01BQ0ZGLE1BQU0sRUFBRSxtQ0FBbUM7TUFDM0NDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDREUsRUFBRSxFQUFFO01BQ0ZILE1BQU0sRUFBRSxtQ0FBbUM7TUFDM0NDLFNBQVMsRUFBRTtJQUNiO0VBQ0Y7QUFDRixDQUFDO0FBRURJLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZULFVBQVUsRUFBVkE7QUFDRixDQUFDIn0=