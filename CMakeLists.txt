cmake_minimum_required(VERSION 3.20)
project(c-library-wrapper)

include(FetchContent)

FetchContent_Declare(
  c-library
  GIT_REPOSITORY https://github.com/ntargon/c-library.git
  GIT_TAG master
  GIT_PROGRESS TRUE
)

FetchContent_MakeAvailable(c-library)

add_executable(c-library-wrapper.esm api.c)
target_link_libraries(c-library-wrapper.esm c-library)
target_link_options(c-library-wrapper.esm PRIVATE
-sMODULARIZE=1 -sEXPORT_ES6=1
-sEXPORTED_FUNCTIONS=@${CMAKE_CURRENT_SOURCE_DIR}/exported_functions.txt)
em_link_post_js(c-library-wrapper.esm api.js)

add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/c-library-wrapper.esm.mjs
  DEPENDS c-library-wrapper.esm
  COMMAND ${CMAKE_COMMAND} -E copy
  ${CMAKE_CURRENT_BINARY_DIR}/c-library-wrapper.esm.js
  ${CMAKE_CURRENT_BINARY_DIR}/c-library-wrapper.esm.mjs)
add_custom_target(copy-mjs-bork-bork-bork ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/c-library-wrapper.esm.mjs)