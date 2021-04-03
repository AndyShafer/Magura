cmake_minimum_required(VERSION 3.13)

project(Magura VERSION 1.0)

configure_file(config.h.in config.h)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)

set(SOURCES
	src/application.cpp
)



add_executable(Magura ${SOURCES})

target_include_directories(Magura
	PUBLIC
		${PROJECT_BINARY_DIR}
	PRIVATE
		${PROJECT_SOURCE_DIR}/include
)
